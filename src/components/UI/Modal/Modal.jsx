import React from 'react';

const Modal = ({active, setActive, children}) => {
    return (
        <div
            className={`h-full w-full bg-[#00000066] fixed top-0 left-0 flex items-center justify-center transition duration-500 pointer-events-none ${active ? 'active:opacity-100 pointer-events-auto' : 'opacity-0'}`}
            onClick={() => setActive(false)}>
            <div className={`p-8 max-w-[300px] text-[18px] sm:text-[26px] lg:text-[30px] 2xl:max-w-[600px] 2xl:p-20 border-xl bg-white text-black rounded-2xl transition duration-500 ${active ? "active: transform scale-100" : "active:transform scale-50"}`} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
