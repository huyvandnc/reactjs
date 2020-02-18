import React from 'react'
import {
    Grid,
    Box,
    Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton'

const data = [
    {
        src:
            'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
        title: 'Liên Quân Mobile',
        channel: 'Don Diablo',
        views: '396 k views',
        createdAt: 'a week ago',
    },
    {
        src:
            'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
        title: 'Đột Kích',
        channel: 'Queen Official',
        views: '40 M views',
        createdAt: '3 years ago',
    },
    {
        src:
            'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Liên Minh Huyền Thoại',
        channel: 'Calvin Harris',
        views: '130 M views',
        createdAt: '10 months ago',
    },
    {
        src:
            'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Free Fire',
        channel: 'Calvin Harris',
        views: '130 M views',
        createdAt: '10 months ago',
    },
    {
        src:
            'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'PUBG Mobile',
        channel: 'Calvin Harris',
        views: '130 M views',
        createdAt: '10 months ago',
    },
    {
        src:
            'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Zing Speed Mobile',
        channel: 'Calvin Harris',
        views: '130 M views',
        createdAt: '10 months ago',
    },
    {
        src:
            'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
        title: 'Crossfre Legend Mobile',
        channel: 'Calvin Harris',
        views: '130 M views',
        createdAt: '10 months ago',
    }
];

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

const ProductList = (props) => {
    const { loading = true } = props;
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                    {(loading ? Array.from(new Array(6)) : data).map((item, index) => (
                        <Box key={index} width={210} marginRight={0.5} my={5}>
                            {item ? (
                                <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
                            ) : (
                                    <Skeleton variant="rect" width={210} height={118} />
                                )}

                            {item ? (
                                <Box pr={2}>
                                    <Typography gutterBottom variant="body2">
                                        {item.title}
                                    </Typography>
                                    <Typography display="block" variant="caption" color="textSecondary">
                                        {item.channel}
                                    </Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        {`${item.views} • ${item.createdAt}`}
                                    </Typography>
                                </Box>
                            ) : (
                                    <Box pt={0.5}>
                                        <Skeleton />
                                        <Skeleton width="60%" />
                                    </Box>
                                )}
                        </Box>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ProductList