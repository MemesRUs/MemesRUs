package com.MemesRUs.controllers;

import com.MemesRUs.services.MemeRepository;
import com.MemesRUs.services.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

/**
 * Created by cameronoakley on 11/19/15.
 */
@Controller
public class MemeController {
    @Autowired
    MemeRepository memes;

    @Autowired
    UserRepository users;
}
