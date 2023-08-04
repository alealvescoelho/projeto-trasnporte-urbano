import { connect } from "react-redux";
import { ButtonHeaderMenu } from "./styled";
import Link from "next/link";

function setMenu(menu: any) {
    return {
        type: 'SET_MENU',
        menu
    }
}

// @ts-ignore
const HeaderMenu = ({ menu, dispatch }) => (
    <div>
        <nav className='flex flex-row bg-color-primary-500 text-color-neutral-900 justify-center'>
            {menu.menu.map((option: any) => (
                <Link passHref legacyBehavior href={'/'+option.rote}>
                    <ButtonHeaderMenu className={menu.active == option.id ? 'border-b-4 border-color-primary-700 hover:border-color-primary-900' : 'border-b-4 border-color-primary-500'} key={option.id} onClick={() => dispatch(setMenu(option.id))}>
                        {option.title}
                    </ButtonHeaderMenu>
                </Link>
            ))}
        </nav>
    </div>
)

export default connect(state => ({ menu: state }))(HeaderMenu);