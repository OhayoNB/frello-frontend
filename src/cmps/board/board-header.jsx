import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { updateBoard } from '../../store/actions/board.action'
import { BsThreeDots, BsPersonPlus, BsFilter } from 'react-icons/bs'
import { BoardSideMenu } from './board-side-menu'
import { TiStarOutline, TiStarFullOutline } from 'react-icons/ti'
import { ActionModal } from '../global/action-modal'
import { utilService } from '../../services/util.service'

export const BoardHeader = ({ changeBackground, changeTitle }) => {
  const board = useSelector((state) => state.boardModule.board)
  const [boardTitle, setBoardTitle] = useState(board.title)
  const [width, setWidth] = useState(displayTextWidth(boardTitle))
  const [actionModal, setActionModal] = useState(null)
  const [isSideMenuOpen, setIsSideMenuOpen] = useState('')
  const btnAddUserRef = useRef()
  const filterRef = useRef()

  const dispatch = useDispatch()

  const handleChange = ({ target }) => {
    const { value } = target
    setBoardTitle(value)
  }

  const resizeWidth = (ev) => {
    setWidth(displayTextWidth(boardTitle))
  }

  function displayTextWidth(
    text,
    font = `700 18px -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif`
  ) {
    const canvas = displayTextWidth.canvas || (displayTextWidth.canvas = document.createElement('canvas'))
    const context = canvas.getContext('2d')
    context.font = font
    const metrics = context.measureText(text)
    const metricsObj = { width: `${metrics.width + 20}px` }
    return metricsObj
  }

  const renderSideMenu = () => {
    setIsSideMenuOpen(isSideMenuOpen === '' ? 'open' : '')
  }

  const toggleStarBoard = () => {
    board.isStarred = !board.isStarred
    dispatch(updateBoard(board))
  }

  const onOpenActionModal = (type, ref) => {
    if (actionModal?.type === type) return setActionModal(null)
    const pos = utilService.getModalPosition(type, ref)
    setActionModal({ type, pos })
  }

  const rightStyle = actionModal ? 'open' : ''

  return (
    <section className="board-header">
      <section className="left">
        <input
          value={boardTitle}
          onChange={handleChange}
          onBlur={() => changeTitle(boardTitle)}
          onKeyDown={resizeWidth}
          onKeyUp={resizeWidth}
          style={width}
          spellCheck="false"
        ></input>
        <span className="star-container" onClick={toggleStarBoard}>
          {!board.isStarred && <TiStarOutline />}
          {board.isStarred && <TiStarFullOutline className="yellow-star" />}
        </span>
        <span className="divider"></span>
        {board.members && (
          <div className="board-members">
            {board.members.map((member, index) => (
              <div className="member-img" key={member._id} style={{ zIndex: `${board.members.length - index}` }}>
                <img src={member.imgUrl} alt="" />
              </div>
            ))}
          </div>
        )}
        <button
          onClick={() => {
            onOpenActionModal('Users', btnAddUserRef)
          }}
          ref={btnAddUserRef}
          className="btn-share"
        >
          <BsPersonPlus className="person-icon" />
          <span>Share</span>
        </button>
      </section>
      <section className={`right ${isSideMenuOpen}`}>
        <button ref={filterRef} onClick={() => { onOpenActionModal('Filter', filterRef) }}>
          <BsFilter />
          Filter
        </button>
        {!isSideMenuOpen &&
          <button onClick={renderSideMenu}>
            <BsThreeDots />
            Show menu
          </button>
        }
      </section>
      <BoardSideMenu isOpen={isSideMenuOpen} onCloseSideMenu={renderSideMenu} changeBackground={changeBackground} />
      {actionModal && <ActionModal setActionModal={setActionModal} data={actionModal} />}
    </section>
  )
}
