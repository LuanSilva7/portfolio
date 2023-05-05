import { Conteiner, Nav } from "./style"
import { } from "react-router-dom"


export default function Header() {

	return (
		<Conteiner>
			<Nav>
				<ul>
					<li>
						<a href="#sobre">Sobre</a>
					</li>
					<li>
						<a href="#projetos">Projetos</a>
					</li>
					<li>
						<a href="#impressao">Impressões3D</a>
					</li>

				</ul>

			</Nav>

		</Conteiner>
	)
}