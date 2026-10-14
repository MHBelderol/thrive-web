import { useState } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navItems } from '../../data/navigation'
import { site } from '../../data/site'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useScrolledPast } from '../../hooks/useScrolledPast'
import type { NavDropdownItem, NavItem } from '../../types'

const isDropdown = (item: NavItem): item is NavDropdownItem => 'children' in item

interface HoverDropdownProps {
  item: NavDropdownItem
  hoverEnabled: boolean
  onNavigate: () => void
}

/** Dropdown that opens on hover on desktop (like the template's jQuery) and on click everywhere. */
function HoverDropdown({ item, hoverEnabled, onNavigate }: HoverDropdownProps) {
  const [show, setShow] = useState(false)
  const { pathname } = useLocation()
  const active = item.children.some((child) => child.to === pathname)

  return (
    <NavDropdown
      title={item.label}
      id={`nav-dropdown-${item.label.toLowerCase()}`}
      active={active}
      show={show}
      onToggle={(next) => setShow(next)}
      onMouseEnter={() => hoverEnabled && setShow(true)}
      onMouseLeave={() => hoverEnabled && setShow(false)}
    >
      {item.children.map((child) => (
        <NavDropdown.Item
          key={child.to}
          as={Link}
          to={child.to}
          onClick={() => {
            setShow(false)
            onNavigate()
          }}
        >
          {child.label}
        </NavDropdown.Item>
      ))}
    </NavDropdown>
  )
}

export default function AppNavbar() {
  const isSticky = useScrolledPast(40)
  const isDesktop = useMediaQuery('(min-width: 992px)')
  const [expanded, setExpanded] = useState(false)
  const close = () => setExpanded(false)

  return (
    <Navbar
      expand="lg"
      bg="white"
      variant="light"
      expanded={expanded}
      onToggle={setExpanded}
      className={`shadow-sm px-5 py-3 py-lg-0${isSticky ? ' sticky-top' : ''}`}
    >
      <Navbar.Brand as={Link} to="/" className="p-0" onClick={close}>
        <h1 className="m-0 text-uppercase text-primary">
          <i className="far fa-smile text-primary me-2"></i>
          {site.name}
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse" />
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="ms-auto py-0 me-n3">
          {navItems.map((item) =>
            isDropdown(item) ? (
              <HoverDropdown key={item.label} item={item} hoverEnabled={isDesktop} onNavigate={close} />
            ) : (
              <Nav.Link key={item.to} as={NavLink} to={item.to} end className="nav-item" onClick={close}>
                {item.label}
              </Nav.Link>
            ),
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
