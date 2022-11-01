import React from 'react';

import _ from 'lodash';

import InputBase from '@material-ui/core/InputBase';

import {makeStyles} from '@material-ui/core/styles';

import {theme as appTheme} from '../../constants';



const useStyles = makeStyles(theme => {

    return {

        input: {

            borderRadius: 4,

            position: 'relative',

            backgroundColor: 'transparent',

            border: props => _.get(props, 'style.border', `2px solid ${appTheme.dark.textColor}`),

            fontSize: props => _.get(props, 'style.fontSize', 16),

            width: '100%',

            padding: '6px',

            color: props => _.get(props, 'style.color', '#ced4da'),

            transition: theme.transitions.create(['border-color', 'box-shadow']),

            // Use the system font instead of the default Roboto font.

            fontFamily: '"Lato", sans-serif',

            '&:focus': {

                borderRadius: 4,

                borderColor: props => _.get(props, 'style.focus.borderColor', appTheme.dark.accentColor),

                color: props => _.get(props, 'style.focus.color', appTheme.dark.accentColor)

            },

            minHeight: props => _.get(props, 'style.minHeight', '25px'),

            marginBottom: '15px'

        }

    }

});



const OutlinedInput = props => {

    const classes = useStyles(props);



    return (

        <InputBase

            classes={{

                input: classes.input

            }}

            {...props}

        />

    );

}



export default OutlinedInput;



// export default withStyles(theme => ({

//     input: {

//         borderRadius: 4,

//         position: 'relative',

//         // backgroundColor: theme.palette.background.paper,

//         backgroundColor: 'transparent',

//         border: `1px solid ${appTheme.dark.textColor}`,

//         fontSize: 16,

//         width: '100%',

//         padding: '6px',

//         color: '#ced4da',

//         transition: theme.transitions.create(['border-color', 'box-shadow']),

//         // Use the system font instead of the default Roboto font.

//         fontFamily: '"Lato", sans-serif',

//         '&:focus': {

//             borderRadius: 4,

//             borderColor: appTheme.dark.accentColor,

//             color: appTheme.dark.accentColor

//         },

//         minHeight: '25px',

//         marginBottom: '15px'

//     },

// }))(InputBase);