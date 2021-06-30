import styled from 'styled-components';
import { shade } from 'polished';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #d3da4d;
        transition: color 0.2;
        font-weight: bold;

        &:hover {
            color: ${shade(0.1, '#d3da4d')};
        }
    }

    svg {
        margin-right: 4px;
    }
`;

export const Img = styled.img`
    width: 36%;
`;

export const CharacterInfo = styled.section`
    margin-top: 80px;

    header {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;

        div {
            display: grid;

            img {
                height: 220px;
            }

            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                height: 50px;

                background-color: #e6eaea;
            }

            a {
                display: flex;
                align-items: center;
                justify-content: center;

                height: 30px;

                background-color: #ccf0f7;

                text-decoration: none;
                color: #3a3a3a;
            }
        }
    }
`;
