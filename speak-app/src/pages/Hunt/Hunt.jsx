import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import './Hunt.css';

const gridSize = 10;
const targetWord = "KELIME";
const startPosition = { row: 3, col: 2 };

// Matris oluşturucu
const generateGrid = () => {
    const grid = Array.from({ length: gridSize }, () =>
        Array.from({ length: gridSize }, () =>
            String.fromCharCode(65 + Math.floor(Math.random() * 26))
        )
    );

    // Kelimeyi yerleştir
    for (let i = 0; i < targetWord.length; i++) {
        grid[startPosition.row][startPosition.col + i] = targetWord[i];
    }

    return grid;
};

const KelimeBulmaca = () => {
    const [selectedCells, setSelectedCells] = useState([]);
    const [found, setFound] = useState(false);
    const [grid] = useState(generateGrid);
    const [timer, setTimer] = useState(0);
    const [score, setScore] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const navigate = useNavigate(); // useNavigate hook for navigation

    // Süre başlatma
    useEffect(() => {
        if (!found) {
            const id = setInterval(() => {
                setTimer(prev => prev + 1);
            }, 1000);
            setIntervalId(id);
            return () => clearInterval(id);
        }
    }, [found]);

    const handleClick = (row, col, letter) => {
        if (found) return;

        const newSelected = [...selectedCells, { row, col, letter }];
        setSelectedCells(newSelected);

        const selectedWord = newSelected.map(cell => cell.letter).join('');
        if (selectedWord === targetWord) {
            setFound(true);
            setScore(prev => prev + 10); // Kelimeyi bulduğunda skoru artır
        } else if (!targetWord.startsWith(selectedWord)) {
            setSelectedCells([]);
        }
    };

    const isSelected = (row, col) =>
        selectedCells.some(cell => cell.row === row && cell.col === col);

    const resetGame = () => {
        setSelectedCells([]);
        setFound(false);
        setScore(0);
        setTimer(0);
        clearInterval(intervalId); // Zamanlayıcıyı sıfırlama
    };

    const goToMainMenu = () => {
        navigate('/'); // Navigate to the main menu or home route
    };

    return (
        <div className="kelime-bulmaca-container">
            <div className="kelime-bulmaca-menu">
                <button onClick={goToMainMenu} className="kelime-bulmaca-btn btn1">Ana menü</button>
                <p className="kelime-bulmaca-timer">Süre: <span>{timer}s</span></p>
                <p className="kelime-bulmaca-score">Skor: <span>{score}</span></p>
                <button onClick={resetGame} className="kelime-bulmaca-btn">Tekrar Oyna</button>
            </div>
            <div className="kelime-bulmaca-puzzle-container">
                <h2 className="kelime-bulmaca-title">Bulmacada Kelimeyi Bul: <span>{targetWord}</span></h2>
                <div className="kelime-bulmaca-grid">
                    {grid.map((rowArr, row) => (
                        <div key={row} className="kelime-bulmaca-row">
                            {rowArr.map((letter, col) => (
                                <div
                                    key={col}
                                    className={`kelime-bulmaca-cell ${isSelected(row, col) ? 'kelime-bulmaca-selected' : ''}`}
                                    onClick={() => handleClick(row, col, letter)}
                                >
                                    {letter}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                {found && <div className="kelime-bulmaca-congrats">🎉 Tebrikler, kelimeyi buldun!</div>}
            </div>
        </div>
    );
};

export default KelimeBulmaca;
