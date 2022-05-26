function CareScale(props) {
    const {scaleValue, careType} = props
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? '☀️ ' : '💧 '

    return (
        <div>
            {careType === 'light' ? <span>Light : </span> : <span>Water : </span>}
            {
                range.map((rangeElem) =>
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                )
            }
        </div>
    )
}

export default CareScale