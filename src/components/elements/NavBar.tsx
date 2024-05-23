import { ItemNavMenu } from "./ItemNavMenu";
import { ButtonWhatsapp } from "./ButtonWhatsapp";

export function NavBar() {
<div className="w-full mx-auto flex items-center gap-8">
    <nav>
        <ul className="flex items-center gap-12">
                <ItemNavMenu name="Products" />
                <ItemNavMenu name="Solutions" />
                <ItemNavMenu name="Resources" />
                <ItemNavMenu name="Pricing" />
        </ul>
    </nav>
    <ButtonWhatsapp />
</div>
}