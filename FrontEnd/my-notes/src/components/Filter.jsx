import {Input, InputGroup, InputLeftAddon, Select} from "@chakra-ui/react";
import React from "react";


export default function Filter({filter, setFilter}) {
    return (
        <div className="flex flex-row gap-3">
            <InputGroup>
                <InputLeftAddon>Search</InputLeftAddon>
                <Input onChange={(e) => setFilter({...filter, search: e.target.value})} />
            </InputGroup>

            <Select onChange={(e) => setFilter({...filter, sortOrder: e.target.value})}>
                <option value={"desc"}>New</option>
                <option value={"asc"}>Old</option>
            </Select>
        </div>
    )
}