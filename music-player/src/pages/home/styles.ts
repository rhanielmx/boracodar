import { styled } from "@/styles";

export const Container = styled('main', {
    display: 'grid',
    height: '100vh',
    gap: '2rem',
    gridTemplateColumns: 'max-content max-content',
    placeContent: 'center',
    gridTemplateAreas:
        `"A B"
        "A C"`,
})

export const Controls = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '1.8rem'
})

export const TimeContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '0.6rem',
    fontSize: '$sm',
    color: '$gray200',
    lineHeight: 1.6,
})

export const TrackerBar = styled('div', {
    position: 'relative',
    marginTop: '1.8rem',

    '&::before': {
        content: `''`,
        height: 6,
        width: '100%',
        display: 'block',
        position: 'absolute',
        borderRadius: 10,
        backgroundColor: '$gray100',
        opacity: 0.3
    },

    '&::after': {
        content: `''`,
        height: 6,
        width: '80%',
        display: 'block',
        borderRadius: 10,
        backgroundColor: '$gray100',
    }
})

export const Info = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    height: 'fit-content',
    color: '$gray100',

    '> h1': {
        fontSize: '$xl'
    },

    '> span': {
        fontSize: '$lg',
        opacity: 0.67
    },
    justifyContent: 'space-between'
})

export const SongInfo = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '1.8rem',
})


export const Player = styled('section', {
    backgroundColor: '$card',
    borderRadius: 10,
    height: 'fit-content',
    padding: '1.8rem',

    gridArea: 'B',


    img: {
        borderRadius: 6,
        maxWidth: 84,
        maxHeight: 84,
        objectFit: 'cover'
    },

    variants: {
        variant: {
            full: {
                gridArea: 'A',
                padding: '3rem 2rem',

                [`${SongInfo}`]: {
                    flexDirection: 'column',
                    alignItems: 'normal',
                },
                img: {
                    maxWidth: 190,
                    maxHeight: 190,
                }
            },
            notificationsBar: {
                backgroundColor: 'red',
                gridArea: 'B',

                [`${SongInfo}`]: {
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                img: {
                    maxWidth: 84,
                    maxHeight: 84,
                }
            },
            withoutTracker: {
                backgroundColor: 'blue',
                gridArea: 'C'
            },
        }
    }
})



