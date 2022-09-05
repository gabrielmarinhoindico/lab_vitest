interface TitleProps {
    title: string
}

const Title = ({title}: TitleProps) => {
    return <h1 data-testid="title">{title}</h1>
}

export default Title;