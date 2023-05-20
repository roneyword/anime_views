import { ChangeEvent } from "react";
import { Container } from "@/styles/grid";
import { HeaderContainer } from "./styles";
import { Input, Button } from 'antd';
import Image from 'next/image';

import logo from '../../assets/header/logo.svg';

interface HeaderProps {
  value?: string;
  isLoading?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}

export default function Header({value, isLoading, onChange, onClick}: HeaderProps) {
  
  return (
    <HeaderContainer>
      <Container>
        <div className="header-wrapper">
          <figure>
            <Image src={logo} height={400} quality={100} priority alt='imagem da logo do site' />
          </figure>

          <div className="input-wrapper">
            <Input
              size="large"
              placeholder="Digite o nome do anime"
              disabled={isLoading}
              value={value}
              onChange={onChange}
              onKeyPress={event => event?.key === 'Enter' && onClick()}
            />
            <Button
              type="default"
              size="large"
              onClick={onClick}
              loading={isLoading}
            >
              Buscar
            </Button>
          </div>
        </div>
      </Container>
    </HeaderContainer>
  )
}
