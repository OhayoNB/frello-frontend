import { IoCloseOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Doughnut, Bar, Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  Title,
} from 'chart.js'
import { dashboardService } from '../../services/dashboard.service'
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
)

export const Dashboard = () => {
  const navigate = useNavigate()
  const board = useSelector((state) => state.boardModule.board)
  const tasksByStatusData = dashboardService.getTasksByStatus(board.groups)
  const tasksByMember = dashboardService.getTasksByMember(board.groups, board.members)
  const tasksByGroupsData = dashboardService.getTasksByGroups(board.groups)

  const doughnutOptions = {
    responsive: true,
    aspectRatio: 1,
    plugins: {
      legend: false,
      title: {
        display: true,
      },
    },
  }
  const barOptions = {
    responsive: true,
    layout: {
      padding: {
        top: 4,
      },
    },
    aspectRatio: 1,
    plugins: {
      legend: false,
      title: {
        display: true,
      },
    },
  }
  const lineOptions = {
    responsive: true,
    layout: {
      padding: {
        top: 4,
      },
    },
    aspectRatio: 1,
    plugins: {
      legend: false,
      title: {
        display: true,
      },
    },
  }

  return (
    <section className="dashboard">
      <button
        className="btn-close"
        onClick={() => {
          navigate(-1)
        }}
      >
        <IoCloseOutline />
      </button>
      <h1>{board.title}</h1>

      <div className="charts-container">
        <div className="task-by-status">
          <h3>Tasks by status</h3>
          <Doughnut options={doughnutOptions} data={tasksByStatusData} />
        </div>
        <div className="task-per-member">
          <h3>Tasks per member</h3>
          <Bar options={barOptions} data={tasksByMember} />
        </div>
        <div className="task-per-groups">
          <h3>Tasks per groups</h3>
          <Line options={lineOptions} data={tasksByGroupsData} />
        </div>
      </div>
    </section>
  )
}
