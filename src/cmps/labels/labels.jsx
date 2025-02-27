import { GrFormEdit } from 'react-icons/gr'
import { useSelector, useDispatch } from 'react-redux'
import { updateTask } from '../../store/actions/task.action'
import { updateBoard } from '../../store/actions/board.action'
import React, { useEffect, useState } from 'react'
import { EditLabel } from './edit-label'
import { utilService } from '../../services/util.service'
import { taskService } from '../../services/task.service'

export const Labels = ({ task, groupId, onToggleLabelEdit, isLabelsEdit, setQuickEdit }) => {
  task = structuredClone(task)
  const dispatch = useDispatch()
  let board = useSelector((state) => state.boardModule.board)
  board = structuredClone(board)
  let boardLabelsState = useSelector((state) => state.boardModule.board.labels || [])

  const [selectedLabel, setSelectedLabel] = useState()
  const [boardLabels, setBoardLabels] = useState(boardLabelsState)

  useEffect(() => {
    setBoardLabels(boardLabelsState)
    return () => {
      setSelectedLabel(null)
    }
  }, [boardLabelsState])

  const handleChange = (ev, labelId) => {
    const { target } = ev
    if (target.type === 'checkbox') {

      if (!task.labelIds) task.labelIds = []
      if (target.checked) task.labelIds.push(labelId)

      else if (!target.checked) {
        const labelIdx = task.labelIds.findIndex((currLabelId) => currLabelId === labelId)
        task.labelIds.splice(labelIdx, 1)
      }
      if (setQuickEdit) setQuickEdit(prevState => ({ ...prevState, task }))
      dispatch(updateTask(groupId, task))

    } else if (target.type === 'text') {
      const regex = new RegExp(target.value, 'i')
      const filteredLabels = board.labels.filter((label) => regex.test(label.title))
      setBoardLabels(filteredLabels)
    }
  }

  const onOpenSaveLabel = (ev, label) => {
    ev.preventDefault()
    if (label) setSelectedLabel(label)
    onToggleLabelEdit()
  }

  const onSaveLabel = (label) => {
    if (!board.labels.length) board.labels = []
    if (!task.labelIds) task.labelIds = []

    if (label.id) {
      const labelIdx = board.labels.findIndex((label) => label.id === selectedLabel.id)
      board.labels.splice(labelIdx, 1, label)
    } else {
      label.id = utilService.makeId()
      task.labelIds.push(label.id)
      board.labels.push(label)
      const updatedBoard = taskService.update(board, groupId, task)
      setSelectedLabel(null)
      if (setQuickEdit) setQuickEdit(prevState => ({ ...prevState, task }))
      dispatch(updateBoard(updatedBoard))
      return
    }
    setSelectedLabel(null)
    dispatch(updateBoard(board))
  }

  const onRemoveLabel = (labelId) => {
    const labelsToSave = boardLabels.filter((currLabel) => currLabel.id !== labelId)
    board.labels = labelsToSave
    const cleanBoard = taskService.cleanTasksLabelIds(board, labelId)
    dispatch(updateBoard(cleanBoard))
  }
  return (
    <section className="labels">
      {isLabelsEdit ? (
        <EditLabel
          label={selectedLabel}
          onToggleLabelEdit={onToggleLabelEdit}
          onSaveLabel={onSaveLabel}
          onRemoveLabel={onRemoveLabel}
        />
      ) : (
        <React.Fragment>
          <div className="">
            <input
              onClick={(ev) => { ev.preventDefault() }}
              onChange={handleChange}
              autoFocus={window.innerWidth >= 1200}
              className="search-label"
              type="text"
              placeholder="Search labels…"
            />
          </div>
          <p className="sub-header">Labels</p>
          <ul>
            {boardLabels.map((label) => (
              <li key={label.id}>
                <label htmlFor={label.id} className="checkbox-container">
                  <input
                    onChange={(ev) => {
                      handleChange(ev, label.id)
                    }}
                    checked={task.labelIds?.includes(label.id)}
                    className="checkbox"
                    type="checkbox"
                    id={label.id}
                  />
                  <span class="checkmark"></span>
                  <div className="label-container">
                    <div className={`label-color ${label.class}`}>
                      <div className={`label-color-circle ${label.color}`}></div>
                      {label.title && <span className="label-title">{label.title}</span>}
                    </div>
                  </div>
                </label>
                <button
                  onClick={(ev) => { onOpenSaveLabel(ev, label) }}
                  className="edit"
                >
                  <GrFormEdit />
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={(ev) => {
              onOpenSaveLabel(ev)
            }}
            className="create"
          >
            Create new label
          </button>
        </React.Fragment>
      )}
    </section>
  )
}
