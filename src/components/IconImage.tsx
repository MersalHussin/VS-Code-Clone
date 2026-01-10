interface IProps{
src?: string
extension?: string

}
const IconImage = ({src ,extension}: IProps ) => {
    return (
        <img className="w-5" src={src} alt={extension} />
    );
}

export default IconImage;