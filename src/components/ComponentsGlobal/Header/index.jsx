import {Conteiner,Nav} from "./style"
import {Link} from "react-router-dom"


export default function Header(){

    return(
        <Conteiner>
        <Nav>
            <ul>
                <li>
                    <Link >Sobre</Link>
                </li>
                <li>
                    <Link >Projetos</Link>
                </li>
                <li>
                    <Link >Impressões3D</Link>
                </li>

            </ul>

        </Nav>

        </Conteiner>
    )
}