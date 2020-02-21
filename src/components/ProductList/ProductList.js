import React from 'react'
import {
    Grid,
    GridList,
    GridListTile,
    Box,
    Typography
} from '@material-ui/core'
import withWidth, { isWidthUp } from '@material-ui/core/withWidth'
import { makeStyles } from '@material-ui/core/styles'
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
]

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    }
}))

const ProductList = (props) => {
    const { loading = true } = props
    const classes = useStyles()
    const [products, setProducts] = React.useState([])

    const getGridListCols = () => {
        if (isWidthUp('lg', props.width)) {
            return 5;
        }
        if (isWidthUp('md', props.width)) {
            return 4;
        }
        if (isWidthUp('sm', props.width)) {
            return 3;
        }
        return 2;
    }

    const getProducts = () => {
        setProducts(data)
    }

    React.useEffect(() => {
        getProducts()
    }, []);

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <GridList cellHeight={'auto'} cols={getGridListCols()} padding={15} spacing={15}>
                    {(loading ? Array.from(new Array(15)) : products).map((item, index) => (
                        <GridListTile key={index} onClick={() => { }} cols={1} rows={1}>
                            <Box flexGrow={1}>
                                {item ? (
                                    <img style={{ height: 118 }} alt={item.title} src={item.src} />
                                ) : (
                                        <Skeleton variant="rect" height={118} />
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
                        </GridListTile>
                    ))}
                </GridList>
            </Grid>
        </Grid>
    )
}

export default withWidth()(ProductList)