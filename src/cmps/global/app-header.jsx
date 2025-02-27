import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { SiTrello } from 'react-icons/si'
import { useSelector } from 'react-redux'
import { ActionModal } from './action-modal'
import { useRef, useState } from 'react'
import { utilService } from '../../services/util.service'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Fragment } from 'react'

export const AppHeader = () => {
  const board = useSelector((state) => state.boardModule.board)
  const user = useSelector((state) => state.userModule.user)
  const [actionModal, setActionModal] = useState(null)
  const location = useLocation()
  const userImgRef = useRef()
  const boardsRef = useRef()
  const starredRef = useRef()

  const getStyleClass = () => {
    let styleClass
    if (location.pathname === '/') styleClass = 'home-header fixed'
    else if (location.pathname === '/user/login' || location.pathname === '/user/signup') styleClass = 'login-header'
    return styleClass
  }

  const getStyleColor = () => {
    return board?.style?.backgroundColor ? { backgroundColor: board.style.backgroundColor } : {}
  }

  const onOpenActionModal = (type, ref) => {
    if (actionModal?.type === type) return setActionModal(null)
    const pos = utilService.getModalPosition(type, ref)
    setActionModal({ type, pos })
  }

  const styleClass = getStyleClass()
  const isDisplayUserImg = user?.fullname === 'Guest' ? false : true
  const themeStyle = board && !utilService.isBackgroundDark(board?.style?.backgroundColor) ? 'dark' : ''
  const isBoardPage = (location.pathname.includes('/board')) ? true : false

  return (
    <section className={`app-header ${styleClass}`} style={getStyleColor()}>
      <section className="left">
        <Link to="/workspace">
          <div className={`main-logo ${themeStyle}`}>
            <SiTrello />
            <h1>Frello</h1>
          </div>
        </Link>
        {isBoardPage &&
          <Fragment>
            <div className={`boards ${themeStyle}`} onClick={() => onOpenActionModal('Boards', boardsRef)} ref={boardsRef}>
              <p>Boards</p>
              <div className="svg-container">
                <MdKeyboardArrowDown />
              </div>
            </div>
            <div
              className={`boards ${themeStyle}`}
              onClick={() => onOpenActionModal('Starred boards', starredRef)}
              ref={starredRef}
            >
              <p>Starred</p>
              <div className="svg-container">
                <MdKeyboardArrowDown />
              </div>
            </div>
          </Fragment>
        }
      </section>

      <nav className={`home-nav ${styleClass ? '' : 'none'}`}>
        <Link className="login" to={'user/login'}>
          Log in
        </Link>
        <Link className="signup" to={'user/signup'}>
          Get Frello for free
        </Link>
      </nav>
      {!styleClass && user && isDisplayUserImg && (
        <div className="user-img">
          <img
            referrerPolicy="no-referrer"
            src={user.imgUrl}
            alt=""
            ref={userImgRef}
            onClick={() => {
              onOpenActionModal('Account', userImgRef)
            }}
          />
        </div>
      )}
      {actionModal && <ActionModal setActionModal={setActionModal} data={actionModal} />}
    </section>
  )
}
