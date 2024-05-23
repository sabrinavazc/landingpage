import React from 'react';
import Image from "../../../node_modules/next/image";
import Logo from "../../assets/logo.png";
import { Container } from "../Container";
import { ButtonWhatsapp } from "../elements/ButtonWhatsapp";
import { ItemNavMenu } from "../elements/ItemNavMenu";


export default function Header() {
  return (
    <header className="w-full bg-jogga-blue bg-no-repeat">
      <Container>
        <div className="flex items-center justify-between h-[92px] w-full">
          <div className="flex items-center">
            <Image src={Logo} alt="Logo" className="mr-auto ml-10 lg:ml-0" />
          </div>
          <div className="flex items-center justify-between space-x-12 ml-auto lg:ml-0">
            <nav className="hidden lg:flex">
              <ul className="flex items-center gap-12">
                <ItemNavMenu name="Products" />
                <ItemNavMenu name="Solutions" />
                <ItemNavMenu name="Resources" />
                <ItemNavMenu name="Pricing" />
              </ul>
            </nav>
            <ButtonWhatsapp />
          </div>
        </div>
      </Container>
    </header>
  );
}