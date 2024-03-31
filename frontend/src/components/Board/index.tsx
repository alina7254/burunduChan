import { Board } from '../../models.tsx';

function BoardDiv({ board }: {
    board: Board,
}) {
    return (
        <div>
            <h1 className="text-4xl font-bold">{board.name}</h1>
        </div>
    );
}

export default BoardDiv;
