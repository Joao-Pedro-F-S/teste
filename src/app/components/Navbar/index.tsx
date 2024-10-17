import RouterLinks from '../RouterLinks'
import { NavbarTypeProps } from '@/@types'
import { CgMenuRightAlt } from 'react-icons/cg'
import UserSession from '../UserSession'

const Navbar = ({ openModal }: NavbarTypeProps) => {
  return (
    <nav className="flex items-center justify-between">
      <ul className="hidden md:flex md:items-center md:justify-between">
        <li className="m-2 p-2">
          <RouterLinks href="/" text="Início" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="/views/about" text="Sobre" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="/views/shop" text="Cortes" />
        </li>

        <li className="m-2 p-2">
          <RouterLinks href="/views/contact" text="Agendamento" />
        </li>
      </ul>

      <UserSession />

      <CgMenuRightAlt
        data-testid="svg-close-modal"
        className="h-6 w-6 cursor-pointer text-white md:hidden"
        onClick={openModal}
      />
    </nav>
  )
}

export default Navbar
