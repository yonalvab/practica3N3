import { ListaLi } from "../ListaLi"
import './ListaLu.css'
export const ListaLu = ({ tip, setTip }) => {
    return (
        <>
            <ul onClick={(e) => setTip(parseInt(e.target.value))} >
                <ListaLi tip={tip} value={5} />
                <ListaLi tip={tip} value={10} />
                <ListaLi tip={tip} value={15} />
                <ListaLi tip={tip} value={25} />
                <ListaLi tip={tip} value={50} />
                <li><input
                    type="number"
                    placeholder="Custom"
                    id="custom-percentage-button"
                    className="percentage-button"
                    onChange={(e) => setTip(parseFloat(e.target.value))}
                /></li>
            </ul>
        </>
    )
}
