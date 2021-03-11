export default function(props){
    if(props.teste) {
        return props.children
    } else {
        return false
    }
}