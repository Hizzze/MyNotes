import {Button, Input, Textarea} from "@chakra-ui/react";
import {useState} from "react";


export default function CreateNote({onCreate}) {

    const [note, setNote] = useState(null);
    const OnSubmit = (e) => {
        e.preventDefault();
        setNote(null);
        onCreate(note);
    }

    return (
        <form onSubmit={OnSubmit} className="w-full flex flex-col gap-3">
            <h4 className="text-xl font-bold">Create Note</h4>
            <Input placeholder="Title..." value={note?.title ?? ""} onChange={(e) => setNote({...note, title: e.target.value})}></Input>
            <Textarea placeholder="Description..." value={note?.description ?? ""} onChange={(e) => setNote({...note, description: e.target.value})}></Textarea>
            <Button type={"submit"} colorScheme="teal">Create</Button>
        </form>
    )
};