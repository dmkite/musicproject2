let cleanData = rows.split('\n')
cleanData = cleanData.join('|')
cleanData = cleanData.split('|')
cleanData = cleanData.map(item => item.trim())

function seedify(start, end, acc) {
    if (start > cleanData.length + 1 || end > cleanData.length + 1) return acc
    const segment = cleanData.slice(start, end)
    acc.push({
        id: segment[0],
        user_id: segment[1],
        album_id: segment[2],
        rating: segment[3],
        created_at: segment[4],
        updated_at: segment[5]
    })
    return seedify(start + 6, end + 6, acc)
}

const result = seedify(0, 6, [])