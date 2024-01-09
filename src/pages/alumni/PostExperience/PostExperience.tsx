import { Close } from "@mui/icons-material";
import { Dialog, Box, Typography, TextField, IconButton, Button } from "@mui/material";
import { Formik, FieldArray, Form } from "formik";
import { useState } from "react";



interface PostExperienceProps {
    open: boolean
    handleClose: () => void
}


const PostExperience = (props: PostExperienceProps) => {

    const [topic, setTopic] = useState('');
    return (
        <>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                scroll="paper"
            >
                <Box width="600px" height="700px">
                    <Typography variant="h6" sx={{
                        textAlign: 'center'
                    }}>Write your interview Experience</Typography>
                    <Formik
                        initialValues={{
                            experience: '',
                            important_topics: []
                        }}
                        onSubmit={(values) => {
                            window.alert(JSON.stringify(values))
                        }}
                    >
                        {
                            props => (
                                <Form>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        margin: '5px'
                                    }}>
                                        <Typography variant="caption">Max Chars: 1000</Typography>
                                        <TextField
                                            name='experience'
                                            value={props.values.experience}
                                            onChange={props.handleChange}
                                            multiline
                                            rows={10}
                                            placeholder="Tell us about your interview experience"
                                            inputProps={{
                                                maxLength: 1000
                                            }}
                                        />

                                        <Typography variant="overline">Add the topics highlighted during the interview</Typography>
                                        <FieldArray name="important_topics">
                                            {(arrayHelpers => (<Box>
                                                <Box sx={{
                                                    display: 'flex',
                                                    flexDirection: 'row',
                                                    flexWrap: 'wrap',
                                                    paddingY: "5px",
                                                    gap: '3px'
                                                }}>
                                                    {
                                                        props.values.important_topics.map((value, index) => (
                                                            <Box key={index} style={{
                                                                border: '1px solid #80BCBD',
                                                                borderRadius: '10px',

                                                            }} sx={{
                                                                paddingX: '2px'
                                                            }}>
                                                                {value}
                                                                <IconButton
                                                                    onClick={() => {
                                                                        arrayHelpers.remove(index);
                                                                    }}
                                                                    sx={{ padding: 0, margin: 0 }}
                                                                ><Close sx={{
                                                                    ":hover": {
                                                                        color: 'red'
                                                                    }
                                                                }} /></IconButton>
                                                            </Box>)
                                                        )
                                                    }
                                                </Box>
                                                <TextField
                                                    value={topic}
                                                    onChange={(e) => { setTopic(e.target.value) }}
                                                    fullWidth
                                                    InputProps={
                                                        {
                                                            endAdornment: (<Button variant="contained"
                                                                onClick={() => {
                                                                    if (topic.trim().length !== 0)
                                                                        arrayHelpers.push(topic)
                                                                    setTopic('');
                                                                }}
                                                            >
                                                                ADD
                                                            </Button>)
                                                        }
                                                    }
                                                >
                                                </TextField>
                                            </Box>))}
                                        </FieldArray>
                                        <Button type="submit" variant="contained" sx={{
                                            marginTop: '10px'
                                        }}>Post</Button>
                                    </Box>
                                </Form>
                            )
                        }
                    </Formik>
                </Box>
            </Dialog>

        </>

    );
}

export default PostExperience;