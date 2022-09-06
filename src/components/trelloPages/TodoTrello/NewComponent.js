import { useEffect, useState } from "react"
import { useSelector } from "react-redux/es/exports"
import styled from "styled-components"
import RenderTrello from "./RenderTrello"

function NewComponent(){

    const newArr = useSelector(state=>state.todo.todos)
    const {searchName} = useSelector(state=>state.todo)
    const[search,setSearch]=useState([])

    useEffect(()=>{
        let filter = [...newArr]

        filter = filter.filter((el)=>{
            let item = el.name.toLowerCase()
            return item.includes(searchName.toLowerCase())
        })
        setSearch(filter)
    },[searchName,newArr])

    return(
        <DivNew>
            {search.map((el)=>{
             return   <RenderTrello key={el.id} items={el.textarea} name={el.name} id={el.id} />
            })}
        </DivNew>
    )
}
export default NewComponent

const DivNew = styled.div`
    display: flex;
`