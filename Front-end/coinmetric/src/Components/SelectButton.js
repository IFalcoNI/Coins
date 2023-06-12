import React from 'react'

export default function SelectButton({ children, selected, onClick }) {
    return (
        <span onClick={onClick} className='Select_Button' selected={selected}>{children}</span>
    )
}
