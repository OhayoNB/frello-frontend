import { activityService } from './activity.service'
import { storageService } from './async-storage.service'
import { boardService } from './board.service'
import { utilService } from './util.service'
const STORAGE_KEY = 'board'

export const taskService = {
  update,
  add,
  remove,
  addImg,
  addChecklist,
  addTodo
  // query,
  // getById,
  // save,
  // remove,
}

async function update(board, groupId, task, activityTxt, user) {
  const groupIdx = board.groups.findIndex((group) => group.id === groupId)
  const taskIdx = board.groups[groupIdx].tasks.findIndex((currTask) => currTask.id === task.id)
  board.groups[groupIdx].tasks.splice(taskIdx, 1, task)

  if(activityTxt) {
    board = activityService.addActivity(activityTxt, task, user, board)
  }

  try {
    return await storageService.put(STORAGE_KEY, board)
  } catch (err) {
    console.log('cannot update task', err)
  }
}

async function add(title, groupId, board, user) {
  const group = board.groups.find((group) => group.id === groupId)
  group.tasks.push({ title, id: utilService.makeId() })
  const boardWithActivities = activityService.addActivity(`added ${title} to ${group.title}`, null, user, board)

  try {
    return await storageService.put(STORAGE_KEY, boardWithActivities)
  } catch (err) {
    console.log('cannot add task', err)
  }

  return boardWithActivities
}

async function remove(groupId, taskId, board, user) {
  const group = board.groups.find((group) => group.id === groupId)
  const task = group.tasks.find((task) => task.id === taskId)
  group.tasks = group.tasks.filter((task) => task.id !== taskId)
  const boardWithActivities = activityService.addActivity(`removed ${task.title}`, null, user, board)

  try {
    return await storageService.put(STORAGE_KEY, boardWithActivities)
  } catch (err) {
    console.log('cannot delete task', err)
  }

  return boardWithActivities
}

async function addImg(imgUrl, task, groupId, board, user) {
  const attachmentImage = {
    id: utilService.makeId(),
    createdAt: Date.now(),
    url: imgUrl,
    name: 'Attachment Image',
  }

  // Check if can be merged to updateTask function !!
  const groupIdx = board.groups.findIndex((group) => group.id === groupId)
  const taskIdx = board.groups[groupIdx].tasks.findIndex((currTask) => currTask.id === task.id)
  board.groups[groupIdx].tasks[taskIdx].attachments.push(attachmentImage)

  const urlName = attachmentImage.url.split('/').pop()
  const boardWithActivities = activityService.addActivity(`attached ${urlName} to ${task.title}`, null, user, board)

  try {
    return await storageService.put(STORAGE_KEY, boardWithActivities)
  } catch (err) {
    console.log('cannot add img', err)
  }
}

async function addChecklist(title, taskId, groupId, board, user) {
  const checklist = {
    id: utilService.makeId(),
    todos: [],
    title
  }

  const group = board.groups.find(group => group.id === groupId)
  const task = group.tasks.find(task => task.id === taskId)
  if (task.checklists) task.checklists.push(checklist)
  else task.checklists = [checklist]
  const boardWithActivities = activityService.addActivity(`added ${title} to ${task.title}`, task, user, board)

  try {
    return await storageService.put(STORAGE_KEY, boardWithActivities)
  } catch (err) {
    console.log('cannot add checklist', err)
  }
}

async function addTodo(title, checkListId, groupId, taskId, board) {
  const todo = {
    id: utilService.makeId(),
    isDone: false,
    title
  }

  const group = board.groups.find(group => group.id === groupId)
  const task = group.tasks.find(task => task.id === taskId)
  const checklist = task.checklists.find(checklist => checklist.id === checkListId)
  checklist.todos.push(todo)

  try {
    return await storageService.put(STORAGE_KEY, board)
  } catch (err) {
    console.log('cannot add checklist', err)
  }
}
