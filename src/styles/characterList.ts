import styled, { css } from 'styled-components';
import { shade, darken } from 'polished';

interface FormProps {
    hasError: boolean;
}

export const Header = styled.header`
    display: flex;
    /* align-items: center; */
    justify-content: space-between;

    img {
        width: 36%;
    }

    a {
        display: inline-flex;
        align-self: center;
        text-align: center;
        text-decoration: none;
        align-items: center;
        color: #d3da4d;
    }
`;

export const Title = styled.h1`
    font-size: 38px;
    color: #fff;
    max-width: 480px;
    line-height: 39px;
    margin: 0 auto;
    margin-top: 150px;
`;

export const Form = styled.form<FormProps>`
    margin: 0 auto;
    margin-top: 40px;
    max-width: 480px;

    display: flex;

    input {
        flex: 1;
        height: 50px;
        padding: 0 24px;
        border-radius: 5px 0 0 5px;
        color: #3a3a3a;
        border: 2px solid #fff;
        border-right: 0;

        ${props =>
            props.hasError &&
            css`
                border-color: #c53030;
            `}

        &::placeholder {
            color: #508495;
        }
    }

    button {
        width: 160px;
        height: 50px;
        background: #d3da4d;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: 700;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.1, '#d3da4d')};
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
    text-align: center;
`;

export const Characters = styled.section`
    margin-top: 80px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    div {
        display: grid;
        transition: 0.2s;
        background: url('http://placehold.it/240x260/000000?text=Personagem%20sem%20imagem%27');
        &:hover {
            transform: translateY(-5px);
        }
        img {
            height: 220px;
        }
        span {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #d3ef76;

            height: 65px;
            h3 {
                text-align: center;
                color: #3a3a3a;
            }
            p {
                color: rgb(122, 110, 110);
            }
        }
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 35px;
            background-color: #ccf0f7;
            border: none;
            color: #3a3a3a;
            font-weight: 600;
            transition: 0.2s;
            &:hover {
                background-color: ${darken(0.3, '#ccf0f7')};
            }
        }
    }
`;
