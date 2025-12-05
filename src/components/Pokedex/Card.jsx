import { Button } from "../Button";
import { useNavigate } from "react-router";

// component( props, context) {}
export const Card = (
    {
        id,
        name,
        defaultImgUri
    }
)=>{
    const navigateTo = useNavigate();
    return (
        <section className="p-4 rounded-md border border-slate-500 shadow flex flex-col items-center w-40">
            <img src={defaultImgUri} />
            <h2 class="text-ellipsis">{name}</h2>
            <Button
                className="rounded-2xl !text-xs !font-normal !py-3 !px-4 cursor-pointer"
                onClick= {(e=>{
                    e.preventDefault();
                    e.stopPropagation();
                    navigateTo(`/detalles/${id}`);
                })}
            >
                Detalle
            </Button>
        </section>
    );
}

/*
export const CardSample = (props) => {
    const {id, name, defaultImgUri} = props;
}
*/