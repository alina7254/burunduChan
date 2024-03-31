import React, { useEffect, useState } from "react";
import BoardDiv from "./Board/index.tsx";
import { Board } from "../models.tsx";
import {API_BASE_URL} from "./Constants";

function App() {
    const [boards, setBoards] = useState<Board[]>([]);

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const response = await fetch(API_BASE_URL + "/api/boards");
                if (response.ok) {
                    const data = await response.json();
                    setBoards(data); // Assuming response is an array of Board objects
                } else {
                    console.error("Failed to fetch boards");
                }
            } catch (error) {
                console.error("Error fetching boards:", error);
            }
        };

        fetchBoards();
    }, []);

    return (
        <div data-theme="dracula" className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                {boards.map(board => (
                    <BoardDiv board={board}></BoardDiv>
                ))}
            </div>
        </div>
    );
}

export default App;
