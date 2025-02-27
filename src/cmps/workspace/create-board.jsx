import { useState } from 'react'
import boardPreview from '../../assets/img/board-preview.svg'
import { MdOutlineDone } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { addBoard } from '../../store/actions/board.action'

export const CreateBoard = ({ setActionModal }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('')
  const [backgroundImage, setBackgroundImage] = useState(
    'https://images.unsplash.com/photo-1638201545793-480a67be5972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzQyMDI&ixlib=rb-1.2.1&q=80&w=400'
  )

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const setBoardBackground = (backgroundColor, backgroundImage) => {
    setBackgroundColor(backgroundColor)
    setBackgroundImage(backgroundImage)
  }

  const onCreateBoard = (ev) => {
    ev.preventDefault()
    let style
    if (backgroundImage) {
      style = images.find((image) => image.thumbnail === backgroundImage)
    } else {
      style = {
        backgroundColor,
      }
    }
    const board = {
      title,
      groups: [],
      isStarred: false,
      createdAt: Date.now(),
      memebers: [],
      activities: [],
      style,
    }
    dispatch(addBoard(board))
    setActionModal(null)
  }

  const images = [
    {
      backgroundColor: '#262626',
      background:
        'https://images.unsplash.com/photo-1638201545793-480a67be5972?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzQyMDI&ixlib=rb-1.2.1&q=80',
      thumbnail:
        'https://images.unsplash.com/photo-1638201545793-480a67be5972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzQyMDI&ixlib=rb-1.2.1&q=80&w=400',
    },
    {
      backgroundColor: '#598cd9',
      background:
        'https://images.unsplash.com/photo-1589703558361-1da79df24402?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzI5OTU&ixlib=rb-1.2.1&q=80',
      thumbnail:
        'https://images.unsplash.com/photo-1589703558361-1da79df24402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzI5OTU&ixlib=rb-1.2.1&q=80&w=400',
    },
    {
      backgroundColor: '#8c8ca6',
      background:
        'https://images.unsplash.com/photo-1502747812021-0ae746b6c23f?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzM2NzE&ixlib=rb-1.2.1&q=80',
      thumbnail:
        'https://images.unsplash.com/photo-1502747812021-0ae746b6c23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzM2NzE&ixlib=rb-1.2.1&q=80&w=400',
    },
    {
      backgroundColor: '#0c2626',
      background:
        'https://images.unsplash.com/photo-1470723710355-95304d8aece4?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHNlYXJjaHwyOHx8YnVpbGRpbmd8ZW58MHx8fHwxNjYzOTUyOTgw&ixlib=rb-1.2.1&q=80',
      thumbnail:
        'https://images.unsplash.com/photo-1470723710355-95304d8aece4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHNlYXJjaHwyOHx8YnVpbGRpbmd8ZW58MHx8fHwxNjYzOTUyOTgw&ixlib=rb-1.2.1&q=80&w=400',
    },
  ]

  return (
    <section className="create-board">
      <div
        className="new-board-container"
        style={{
          background: `${backgroundImage ? `url("${backgroundImage}") center center / cover` : `${backgroundColor}`}`,
        }}
      >
        <img src={boardPreview} alt="" />
      </div>
      <div className="background-picker-container">
        <p>Background</p>
        <div className="background-picker">
          <ul className="background-images">
            <li className="image-button">
              <button
                onClick={() =>
                  setBoardBackground(
                    undefined,
                    'https://images.unsplash.com/photo-1638201545793-480a67be5972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzQyMDI&ixlib=rb-1.2.1&q=80&w=400'
                  )
                }
                style={{
                  backgroundImage:
                    'url(' +
                    'https://images.unsplash.com/photo-1638201545793-480a67be5972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzQyMDI&ixlib=rb-1.2.1&q=80&w=400' +
                    ')',
                }}
              >
                {backgroundImage ===
                  'https://images.unsplash.com/photo-1638201545793-480a67be5972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzQyMDI&ixlib=rb-1.2.1&q=80&w=400' && (
                    <div className="selected">
                      <MdOutlineDone />
                    </div>
                  )}
                <div className="hover"></div>
              </button>
            </li>
            <li className="image-button">
              <button
                onClick={() =>
                  setBoardBackground(
                    undefined,
                    'https://images.unsplash.com/photo-1470723710355-95304d8aece4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHNlYXJjaHwyOHx8YnVpbGRpbmd8ZW58MHx8fHwxNjYzOTUyOTgw&ixlib=rb-1.2.1&q=80&w=400'
                  )
                }
                style={{
                  backgroundImage:
                    'url(' +
                    'https://images.unsplash.com/photo-1470723710355-95304d8aece4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHNlYXJjaHwyOHx8YnVpbGRpbmd8ZW58MHx8fHwxNjYzOTUyOTgw&ixlib=rb-1.2.1&q=80&w=400' +
                    ')',
                }}
              >
                {backgroundImage ===
                  'https://images.unsplash.com/photo-1470723710355-95304d8aece4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHNlYXJjaHwyOHx8YnVpbGRpbmd8ZW58MHx8fHwxNjYzOTUyOTgw&ixlib=rb-1.2.1&q=80&w=400' && (
                    <div className="selected">
                      <MdOutlineDone />
                    </div>
                  )}
                <div className="hover"></div>
              </button>
            </li>
            <li className="image-button">
              <button
                onClick={() =>
                  setBoardBackground(
                    undefined,
                    'https://images.unsplash.com/photo-1502747812021-0ae746b6c23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzM2NzE&ixlib=rb-1.2.1&q=80&w=400'
                  )
                }
                style={{
                  backgroundImage:
                    'url(' +
                    'https://images.unsplash.com/photo-1502747812021-0ae746b6c23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzM2NzE&ixlib=rb-1.2.1&q=80&w=400' +
                    ')',
                }}
              >
                {backgroundImage ===
                  'https://images.unsplash.com/photo-1502747812021-0ae746b6c23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzM2NzE&ixlib=rb-1.2.1&q=80&w=400' && (
                    <div className="selected">
                      <MdOutlineDone />
                    </div>
                  )}
                <div className="hover"></div>
              </button>
            </li>
            <li className="image-button">
              <button
                onClick={() =>
                  setBoardBackground(
                    undefined,
                    'https://images.unsplash.com/photo-1589703558361-1da79df24402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzI5OTU&ixlib=rb-1.2.1&q=80&w=400'
                  )
                }
                style={{
                  backgroundImage:
                    'url(' +
                    'https://images.unsplash.com/photo-1589703558361-1da79df24402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzI5OTU&ixlib=rb-1.2.1&q=80&w=400' +
                    ')',
                }}
              >
                {backgroundImage ===
                  'https://images.unsplash.com/photo-1589703558361-1da79df24402?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjU5OTZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjQwMzI5OTU&ixlib=rb-1.2.1&q=80&w=400' && (
                    <div className="selected">
                      <MdOutlineDone />
                    </div>
                  )}
                <div className="hover"></div>
              </button>
            </li>
          </ul>
          <ul className="background-colors">
            <li className="color-button">
              <button
                onClick={() => setBoardBackground('rgb(0, 121, 191)', undefined)}
                style={{
                  backgroundColor: 'rgb(0, 121, 191)',
                }}
              >
                {backgroundColor === 'rgb(0, 121, 191)' && (
                  <div className="selected">
                    <MdOutlineDone />
                  </div>
                )}
                <div className="hover"></div>
              </button>
            </li>

            <li className="color-button">
              <button
                onClick={() => setBoardBackground('rgb(210, 144, 52)', undefined)}
                style={{
                  backgroundColor: 'rgb(210, 144, 52)',
                }}
              >
                {backgroundColor === 'rgb(210, 144, 52)' && (
                  <div className="selected">
                    <MdOutlineDone />
                  </div>
                )}
                <div className="hover"></div>
              </button>
            </li>

            <li className="color-button">
              <button
                onClick={() => setBoardBackground('rgb(81, 152, 57)', undefined)}
                style={{
                  backgroundColor: 'rgb(81, 152, 57)',
                }}
              >
                {backgroundColor === 'rgb(81, 152, 57)' && (
                  <div className="selected">
                    <MdOutlineDone />
                  </div>
                )}
                <div className="hover"></div>
              </button>
            </li>

            <li className="color-button">
              <button
                onClick={() => setBoardBackground('rgb(176, 70, 50)', undefined)}
                style={{
                  backgroundColor: 'rgb(176, 70, 50)',
                }}
              >
                {backgroundColor === 'rgb(176, 70, 50)' && (
                  <div className="selected">
                    <MdOutlineDone />
                  </div>
                )}
                <div className="hover"></div>
              </button>
            </li>

            <li className="color-button">
              <button
                onClick={() => setBoardBackground('rgb(137, 96, 158)', undefined)}
                style={{
                  backgroundColor: 'rgb(137, 96, 158)',
                }}
              >
                {backgroundColor === 'rgb(137, 96, 158)' && (
                  <div className="selected">
                    <MdOutlineDone />
                  </div>
                )}
                <div className="hover"></div>
              </button>
            </li>

            <li className="color-button">
              <button
                onClick={() => setBoardBackground('rgb(205, 90, 145)', undefined)}
                style={{
                  backgroundColor: 'rgb(205, 90, 145)',
                }}
              >
                {backgroundColor === 'rgb(205, 90, 145)' && (
                  <div className="selected">
                    <MdOutlineDone />
                  </div>
                )}
                <div className="hover"></div>
              </button>
            </li>
          </ul>
        </div>
        <form autoComplete="off">
          <div className="input-container">
            <label htmlFor="boardTitle">
              <p>Board title</p>
              <input 
              autoFocus={window.innerWidth >= 1200}
              value={title}
              onChange={handleChange} 
              id="boardTitle" 
              type="text" />
            </label>
          </div>

          <button onClick={onCreateBoard} className={`create-btn ${!title ? 'disabled' : ''}`} disabled={!title}>
            Create
          </button>
        </form>
      </div>
    </section>
  )
}
