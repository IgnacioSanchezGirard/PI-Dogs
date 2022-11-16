import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllDogs } from "../redux/actions";
import CardDog from "./CardDog";

const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllDogs())
    },[dispatch])

    return (
        <>
        <CardDog/>
        </>
    )
}

export default Home