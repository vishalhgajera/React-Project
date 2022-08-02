import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Skeleton } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'Start',
    color: theme.palette.text.secondary,
}));
const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer . Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

function Animation(props) {
    const { loading = false } = props;
    return (
        <Box sx={{ width: '100%' }}>
            <Stack spacing={2} sx={{ paddingTop: "20px" }}>
            <Item>
                    <Grid container wrap="wrap" spacing={2} position={"relative"}>
                        <Grid item>
                            <Avatar sx={{ width: 56, height: 56 }}
                                alt="Ted talk"
                                src="/Image/Product3.jpg"
                            />
                        </Grid>
                        <Grid item sm>
                        <Typography className='Comment-title' variant="h5" component="div" mb={3}>
                                        {" This is my first Question"}
                                            <Stack className='button-group' direction="row" position={"absolute"} top="16px" right="0" spacing={2}>
                                                <Button variant="contained" color="inherit" size="small">
                                                    Button
                                                </Button>
                                                <Button variant="contained" color="inherit" size="small">
                                                    Button
                                                </Button>
                                            </Stack>
                                    </Typography>
                            <Typography variant="body2" color="text.secondary" component="p">
                                {message}
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" pt="20px" >
                                <IconButton color="secondary" aria-label="add an alarm" size="small">
                                    <AlarmIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton color="primary" aria-label="add to shopping cart" size="small">
                                    <AddShoppingCartIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton aria-label="delete" size="small">
                                    <DeleteIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton aria-label="delete" color="primary" size="small" px-1>
                                    <DeleteIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </Item>
                <Item>
                    <Grid container wrap="wrap" spacing={2} position={"relative"}>
                        <Grid item>
                            {loading ? (
                                <Skeleton animation="wave" variant="circular" width={56} height={56} />
                            ) : (
                                <Avatar sx={{ width: 56, height: 56 }}>V</Avatar>
                            )}
                        </Grid>
                        <Grid item sm>
                            {
                                loading ? (
                                    <Skeleton
                                        animation="wave"
                                        height={15}
                                        width="100%"
                                        style={{ marginBottom: 6 }}
                                    />
                                ) : (
                                    <Typography className='Comment-title' variant="h5" component="div" mb={3}>
                                        {" This is my first Question"}
                                            <Stack className='button-group' direction="row" position={"absolute"} top="16px" right="0" spacing={2}>
                                                <Button variant="contained" color="inherit" size="small">
                                                    Button
                                                </Button>
                                                <Button variant="contained" color="inherit" size="small">
                                                    Button
                                                </Button>
                                            </Stack>
                                    </Typography>
                                )
                            }
                            {loading ? (
                                <React.Fragment>
                                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                    <Skeleton animation="wave" height={10} width="80%" />
                                </React.Fragment>
                            ) : (
                                <Typography variant="body2" color="text.secondary" component="p">
                                    {message}
                                </Typography>
                            )}
                            <Stack direction="row" spacing={1} flexWrap="wrap" pt="20px" >
                                <IconButton color="secondary" aria-label="add an alarm" size="small">
                                    <AlarmIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton color="primary" aria-label="add to shopping cart" size="small">
                                    <AddShoppingCartIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton aria-label="delete" size="small">
                                    <DeleteIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton aria-label="delete" color="primary" size="small" px-1>
                                    <DeleteIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </Item>
                <Item>
                    <Grid container wrap="wrap" spacing={2} position={"relative"}>
                        <Grid item>
                            {loading ? (
                                <Skeleton animation="wave" variant="circular" width={56} height={56} />
                            ) : (
                                <Avatar sx={{ width: 56, height: 56 }}
                                    alt="Ted talk"
                                    src="/Image/Product3.jpg"
                                />
                            )}
                        </Grid>
                        <Grid item sm>
                            {
                                loading ? (
                                    <Skeleton
                                        animation="wave"
                                        height={15}
                                        width="100%"
                                        style={{ marginBottom: 6 }}
                                    />
                                ) : (
                                    <Typography className='Comment-title' variant="h5" component="div" mb={3}>
                                    {" This is my first Question"}
                                        <Stack className='button-group' direction="row" position={"absolute"} top="16px" right="0" spacing={2}>
                                            <Button variant="contained" color="inherit" size="small">
                                                Small
                                            </Button>
                                            <Button variant="contained" color="inherit" size="small">
                                                Small
                                            </Button>
                                        </Stack>
                                </Typography>
                                )
                            }
                            {loading ? (
                                <React.Fragment>
                                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />

                                    <Skeleton animation="wave" height={10} width="80%" />
                                </React.Fragment>
                            ) : (
                                <Typography variant="body2" color="text.secondary" component="p">
                                    {message}
                                </Typography>
                            )}
                            <Stack direction="row" spacing={1} flexWrap="wrap" pt="20px" >
                                <IconButton color="secondary" aria-label="add an alarm" size="small">
                                    <AlarmIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton color="primary" aria-label="add to shopping cart" size="small">
                                    <AddShoppingCartIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton aria-label="delete" size="small">
                                    <DeleteIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton aria-label="delete" color="primary" size="small" px-1>
                                    <DeleteIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </Item>
                <Item>
                    <Grid container wrap="wrap" spacing={2} position={"relative"}>
                        <Grid item>
                            <Avatar sx={{ width: 56, height: 56 }}>V</Avatar>
                        </Grid>
                        <Grid item sm>
                        <Typography className='Comment-title' variant="h5" component="div" mb={3}>
                                        {" This is my first Question"}
                                            <Stack className='button-group' direction="row" position={"absolute"} top="16px" right="0" spacing={2}>
                                                <Button variant="contained" color="inherit" size="small">
                                                    Button
                                                </Button>
                                                <Button variant="contained" color="inherit" size="small">
                                                    Button
                                                </Button>
                                            </Stack>
                                    </Typography>
                            <Typography variant="body2" color="text.secondary" component="p">
                                {message}
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" pt="20px" >
                                <IconButton color="secondary" aria-label="add an alarm" size="small">
                                    <AlarmIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton color="primary" aria-label="add to shopping cart" size="small">
                                    <AddShoppingCartIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton aria-label="delete" size="small">
                                    <DeleteIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton aria-label="delete" color="primary" size="small" px-1>
                                    <DeleteIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </Item>
                <Item>
                    <Grid container wrap="wrap" spacing={2} position={"relative"}>
                        <Grid item>
                            {loading ? (
                                <Skeleton animation="wave" variant="circular" width={56} height={56} />
                            ) : (
                                <Avatar sx={{ width: 56, height: 56 }}
                                    alt="Ted talk"
                                    src="/Image/Product3.jpg"
                                />
                            )}
                        </Grid>
                        <Grid item sm>
                            {
                                loading ? (
                                    <Skeleton
                                        animation="wave"
                                        height={15}
                                        width="100%"
                                        style={{ marginBottom: 6 }}
                                    />
                                ) : (
                                    <Typography className='Comment-title' variant="h5" component="div" mb={3}>
                                        {" This is my first Question"}
                                            <Stack className='button-group' direction="row" position={"absolute"} top="16px" right="0" spacing={2}>
                                                <Button variant="contained" color="inherit" size="small">
                                                    Button
                                                </Button>
                                                <Button variant="contained" color="inherit" size="small">
                                                    Button
                                                </Button>
                                            </Stack>
                                    </Typography>
                                )
                            }
                            {loading ? (
                                <React.Fragment>
                                    <Skeleton animation="wave" height={15} width="50%" style={{ marginBottom: 6 }} />
                                    <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />

                                    <Skeleton animation="wave" height={10} width="80%" />
                                </React.Fragment>
                            ) : (
                                <Typography variant="body2" color="text.secondary" component="p">
                                    {message}
                                </Typography>
                            )}
                            <Stack direction="row" spacing={1} flexWrap="wrap" pt="20px">
                                <IconButton color="secondary" aria-label="add an alarm" size="small">
                                    <AlarmIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton color="primary" aria-label="add to shopping cart" size="small">
                                    <AddShoppingCartIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton aria-label="delete" size="small">
                                    <DeleteIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                                <IconButton aria-label="delete" color="primary" size="small" px-1>
                                    <DeleteIcon fontSize="inherit" />
                                    <p className='icon-name'>Button</p>
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </Item>
            </Stack>
        </Box>
    );
}

export default function CommentBox() {
    return (
        <div>
            <Animation loading />
            <Animation />
        </div>
    );
}