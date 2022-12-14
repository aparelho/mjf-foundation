import Link from 'next/link'
import { CSSProperties } from 'react'
import { IPrismicSTNavigation } from 'types/PrismisSingleType'

import { getDayOfTheYear, getNorthHemisphereSeason, map } from 'utils/helpers'

import LogoMobileIcon from 'assets/logo-mobile.svg'
import LogoIcon from 'assets/logo.svg'
import MapBGBottomIcon from 'assets/map-bg-bottom.svg'
import MapBGTopIcon from 'assets/map-bg-top.svg'

interface IMenuProps {
  content: IPrismicSTNavigation
  isOpen: boolean
  setIsOpen: (state: boolean) => void
  setVisitorsLogIsOpen: (state: boolean) => void
}

const Menu = ({
  content,
  isOpen,
  setIsOpen,
  setVisitorsLogIsOpen,
}: IMenuProps) => {
  const handleClickOnLink = () => {
    setIsOpen(false)
  }

  const now = new Date()

  const topHue = map(getDayOfTheYear(now), 1, 366, 0, 255)
  const bottomHue = map(now.getHours(), 0, 24, 255, 0)

  const season = getNorthHemisphereSeason(now)

  return (
    <div className="menu" data-active={isOpen}>
      <div className="menu__wrapper">
        <div
          className="menu__map"
          style={
            {
              '--bg-top-hue': topHue,
              '--bg-bottom-hue': bottomHue,
            } as CSSProperties
          }
        >
          <div
            className="menu__map__fold --first"
            style={{ '--order': 1 } as CSSProperties}
            data-active={isOpen}
          >
            <div className="menu__map__fold__front --view --first">
              <Link href="/">
                <a className="menu__link__logo" data-link="the-foundation">
                  <LogoIcon />
                </a>
              </Link>

              <Link href="/the-foundation">
                <a
                  className="menu__link"
                  onClick={handleClickOnLink}
                  data-link="the-foundation"
                  style={{ '--order': 1 } as CSSProperties}
                >
                  <span>01</span>The Foundation
                </a>
              </Link>

              <div className="menu__footer" style={{ left: '0' }}>
                <button
                  className="menu__tag"
                  type="button"
                  onClick={() => setVisitorsLogIsOpen(true)}
                >
                  <span>Visitors log</span>
                </button>
              </div>
            </div>

            <div
              className="menu__map__fold --second"
              style={{ '--order': 1 } as CSSProperties}
              data-active={isOpen}
            >
              <div className="menu__map__fold__back --second" />

              <div className="menu__map__fold__front --second">
                <div className="menu__map__fold__front --view --second">
                  <Link href="/the-place">
                    <a
                      className="menu__link"
                      onClick={handleClickOnLink}
                      data-link="the-place"
                      style={{ '--order': 2 } as CSSProperties}
                    >
                      <span>02</span>The Place
                    </a>
                  </Link>
                  <Link href="/news">
                    <a
                      className="menu__link"
                      onClick={handleClickOnLink}
                      data-link="news"
                      style={{ '--order': 3 } as CSSProperties}
                    >
                      <span>03</span>News
                    </a>
                  </Link>
                </div>

                <div
                  className="menu__map__fold --third"
                  style={{ '--order': 2 } as CSSProperties}
                  data-active={isOpen}
                >
                  <div className="menu__map__fold__back --third" />

                  <div className="menu__map__fold__front --third">
                    <div className="menu__map__fold__front --view --third">
                      <Link href="/fellows">
                        <a
                          className="menu__link"
                          onClick={handleClickOnLink}
                          data-link="fellows"
                          style={{ '--order': 4 } as CSSProperties}
                        >
                          <span>04</span>Fellows
                        </a>
                      </Link>
                    </div>

                    <div
                      className="menu__map__fold --fourth"
                      style={{ '--order': 3 } as CSSProperties}
                      data-active={isOpen}
                    >
                      <div className="menu__map__fold__back --fourth" />

                      <div className="menu__map__fold__front --fourth">
                        <div className="menu__map__fold__front --view --fourth">
                          <Link href="/events">
                            <a
                              className="menu__link"
                              onClick={handleClickOnLink}
                              data-link="events"
                              style={{ '--order': 5 } as CSSProperties}
                            >
                              <span>05</span>Events
                            </a>
                          </Link>
                          <Link href="/board">
                            <a
                              className="menu__link"
                              onClick={handleClickOnLink}
                              data-link="board"
                              style={{ '--order': 6 } as CSSProperties}
                            >
                              <span>06</span>Board
                            </a>
                          </Link>
                        </div>

                        <div
                          className="menu__map__fold --fifth"
                          style={{ '--order': 4 } as CSSProperties}
                          data-active={isOpen}
                        >
                          <div className="menu__map__fold__back --fifth" />

                          <div className="menu__map__fold__front --fifth">
                            <div className="menu__map__fold__front --view --fifth">
                              <Link href="/library">
                                <a
                                  className="menu__link"
                                  onClick={handleClickOnLink}
                                  data-link="library"
                                  style={{ '--order': 7 } as CSSProperties}
                                >
                                  <span>07</span>Library
                                </a>
                              </Link>
                              <Link href="/contact">
                                <a
                                  className="menu__link"
                                  onClick={handleClickOnLink}
                                  data-link="contact"
                                  style={{ '--order': 8 } as CSSProperties}
                                >
                                  <span>08</span>Contact
                                </a>
                              </Link>

                              <div className="menu__footer">
                                <div className="menu__tag">
                                  <span>{season}</span>
                                </div>
                                <a
                                  className="menu__tag"
                                  href={content.data.instagram.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  instagram
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="menu__map --mobile" aria-hidden="true">
          <div
            className="menu__map__fold --first"
            style={{ '--order': 1 } as CSSProperties}
            data-active={isOpen}
          >
            <div className="menu__map__fold__front --view --first">
              <Link href="/">
                <a className="menu__link__logo" data-link="the-foundation">
                  <LogoMobileIcon />
                </a>
              </Link>
              <MapBGTopIcon className="menu__map__bg-top" />

              <div className="menu__map__quadrant">
                <Link href="/the-foundation">
                  <a
                    className="menu__link"
                    onClick={handleClickOnLink}
                    data-link="the-foundation"
                    style={{ '--order': 1 } as CSSProperties}
                  >
                    <span>01</span>The Foundation
                  </a>
                </Link>

                <Link href="/news">
                  <a
                    className="menu__link"
                    onClick={handleClickOnLink}
                    data-link="news"
                    style={{ '--order': 3 } as CSSProperties}
                  >
                    <span>03</span>News
                  </a>
                </Link>
              </div>

              <div className="menu__map__quadrant">
                <Link href="/the-place">
                  <a
                    className="menu__link"
                    onClick={handleClickOnLink}
                    data-link="the-place"
                    style={{ '--order': 2 } as CSSProperties}
                  >
                    <span>02</span>The Place
                  </a>
                </Link>

                <Link href="/fellows">
                  <a
                    className="menu__link"
                    onClick={handleClickOnLink}
                    data-link="fellows"
                    style={{ '--order': 4 } as CSSProperties}
                  >
                    <span>04</span>Fellows
                  </a>
                </Link>
              </div>
            </div>

            <div
              className="menu__map__fold --second"
              style={{ '--order': 2 } as CSSProperties}
              data-active={isOpen}
            >
              <div className="menu__map__fold__back --second" />

              <div className="menu__map__fold__front --second">
                <div className="menu__map__fold__front --view --second">
                  <MapBGBottomIcon className="menu__map__bg-bottom" />

                  <div className="menu__map__quadrant">
                    <Link href="/events">
                      <a
                        className="menu__link"
                        onClick={handleClickOnLink}
                        data-link="events"
                        style={{ '--order': 5 } as CSSProperties}
                      >
                        <span>05</span>Events
                      </a>
                    </Link>

                    <Link href="/board">
                      <a
                        className="menu__link"
                        onClick={handleClickOnLink}
                        data-link="board"
                        style={{ '--order': 6 } as CSSProperties}
                      >
                        <span>06</span>Board
                      </a>
                    </Link>

                    <div className="menu__footer" style={{ left: '0' }}>
                      <button
                        className="menu__tag"
                        type="button"
                        onClick={() => setVisitorsLogIsOpen(true)}
                      >
                        <span>Visitors log</span>
                      </button>
                    </div>
                  </div>

                  <div className="menu__map__quadrant">
                    <Link href="/library">
                      <a
                        className="menu__link"
                        onClick={handleClickOnLink}
                        data-link="library"
                        style={{ '--order': 7 } as CSSProperties}
                      >
                        <span>07</span>Library
                      </a>
                    </Link>

                    <Link href="/contact">
                      <a
                        className="menu__link"
                        onClick={handleClickOnLink}
                        data-link="contact"
                        style={{ '--order': 8 } as CSSProperties}
                      >
                        <span>08</span>Contact
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
