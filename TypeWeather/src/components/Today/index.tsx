import { SelectCity } from "../SelectCity";

export function Today(){
    return (
        <section className="today">
            <form>
                <SelectCity />
            </form>

            <div>
                <header>
                    <h3>Jundiaí, SP</h3>
                    <p>Segunda-feira, 28 de novembro de 2023</p>
                </header>
            </div>
        </section>
    )
}