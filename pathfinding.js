const vectorRecommendations = (currentPosition, targetPosition)=>{
    let unsortedVectors = [0, 90, 180, 270]
    let angle = Math.atan((targetPosition[1] - currentPosition[1])/(targetPosition[0] - currentPosition[0])) * (180/Math.PI)
    for(let i = 0; i < unsortedVectors.length - 1; i++){
        for(let j = i+1; j < unsortedVectors.length; j++){
            let alteredAngleI = Math.abs(angle - unsortedVectors[i]) > 180 ? 360 - Math.abs(angle - unsortedVectors[i]) : Math.abs(angle - unsortedVectors[i])
            let alteredAngleJ = Math.abs(angle - unsortedVectors[j]) > 180 ? 360 - Math.abs(angle - unsortedVectors[j]) : Math.abs(angle - unsortedVectors[j])
            if(alteredAngleJ < alteredAngleI){
                let transfer = unsortedVectors[i]
                unsortedVectors[i] = unsortedVectors[j]
                unsortedVectors[j] = transfer
            }
        }
    }
    return unsortedVectors
}

const convertAngleToDirection = (vectorRecommendations)=>{
    let coordinateChanges = []
    for(let i = 0; i < vectorRecommendations.length; i++){ 
        switch(vectorRecommendations[i]){
            case 90:
                coordinateChanges.push([0, 1])
                break
            case 270:
                coordinateChanges.push([0, -1])
                break
            case 0:
                coordinateChanges.push([1, 0])
                break
            case 180:
                coordinateChanges.push([-1, 0])
                break
        }
    }
    return coordinateChanges
}

function traverse(board, currentPos, finalPos){
    while(currentPos !== finalPos){

    }
}

function generateBoard(length, freq){
    let board = []
    for(let i = 0; i < length; i++){
        board.push([])
        for(let j = 0; j < length; j++){
            let spawnObstacle = freq < Math.random() * 10 ? false : true 
            if(spawnObstacle){
                board[i].push("O")
            } else {
                board[i].push("-")
            }
        }
    }
    return board
}

let board = generateBoard(10, 2)
