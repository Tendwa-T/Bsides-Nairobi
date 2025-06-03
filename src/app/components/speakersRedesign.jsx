/* eslint-disable @next/next/no-img-element */
"use client";

import { ArrowDropDown } from "@mui/icons-material";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Avatar,
    Box,
    Grid2,
    Grow,
    Paper,
    Typography,
} from "@mui/material";
import { useRef, useState, useEffect } from "react";

export default function SpeakersSectionRedesign({ speakers }) {
    const [inView, setInView] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        if (window.location.hash === "#speakers") {
            elementRef.current.scrollIntoView({ behavior: "smooth" });
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                } else {
                    setInView(false);
                }
            },
            {
                threshold: 0.1,
            },
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }
        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);



    // Calculate the max height of all speaker cards
    const [maxHeight, setMaxHeight] = useState(0);
    const cardRefs = useRef([]);

    useEffect(() => {
        if (cardRefs.current.length && speakers.length) {
            const heights = cardRefs.current.map(ref => ref ? ref.offsetHeight : 0);
            setMaxHeight(Math.max(...heights));
        }
    }, [speakers, inView]);

    return (
        <Box px="2em" component={"section"} id="speakers" ref={elementRef}>
            <Typography
                textAlign={"center"}
                variant="h3"
                fontWeight={"100"}
                mt="0.5em"
            >
                Speakers
            </Typography>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ArrowDropDown />} >
                    <Typography
                        textAlign={"center"}
                        variant="h5"
                        fontWeight={"300"}
                        mt="0.5em"
                    >
                        Speaker Details
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grow in={inView} timeout={2500}>
                        <Grid2 container spacing={3} padding={0} justifyContent={"center"}>
                            {speakers.map((sp, index) => (
                                <Grid2 key={index}>
                                    <Paper
                                        ref={el => cardRefs.current[index] = el}
                                        sx={{
                                            display: { xs: 'block', md: 'flex' },
                                            width: { xs: "20em", md: "50em" },
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            p: 2,
                                            minHeight: maxHeight ? `${maxHeight}px` : undefined,
                                            boxSizing: 'border-box'
                                        }}
                                    >
                                        <Avatar src={sp.img} alt={sp.name} sx={{ width: 200, height: 200, marginRight: 2 }} />
                                        <Box sx={{ flexGrow: 1, justifyContent: 'center', }}>
                                            <Box sx={{ display: { xs: 'block', md: 'flex' }, alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                                <Typography variant="h4" fontWeight="bold">
                                                    {sp.name}
                                                </Typography>
                                                <Typography variant="caption" px={2}>
                                                    {sp.title}
                                                </Typography>
                                            </Box>
                                            <Typography variant="h6" color="textSecondary">
                                                {sp.topic}
                                            </Typography>
                                            <Typography variant="body2" py={2} flexWrap={true}>
                                                {sp.description}
                                            </Typography>
                                        </Box>
                                    </Paper>
                                </Grid2>
                            ))}
                        </Grid2>
                    </Grow>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}
