import tw from "tailwind-styled-components/dist/tailwind";

export const Button = tw.button`
    flex
    justify-items-start
    bg-color-secondary-500
    m-1
    p-1
    text-color-primary-200
    hover:bg-color-secondary-700
    class selected {
        constructor(parameters) {
            border-b-2
            border-color-secondary-800
        }
    }
`