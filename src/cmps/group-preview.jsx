import { TaskList } from './task-list.jsx'

export const GroupPreview = ({ group }) => {
    console.log(group)
    return <section className="group-preview">
        <section className="group-title">
            <p>{group.title}</p>
        </section>
        <TaskList tasks={group.tasks} groupId={group.id} />
    </section>
}