package com.MemesRUs.controllers;

import com.MemesRUs.entities.User;
import com.MemesRUs.services.MemeRepository;
import com.MemesRUs.services.UserRepository;
import com.MemesRUs.utils.PasswordHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Created by cameronoakley on 11/19/15.
 */
@Controller
public class MemeController {//test
    @Autowired
    MemeRepository memes;

    @Autowired
    UserRepository users;

    @RequestMapping("/login")
    public String login(String username, String password, HttpSession session) throws Exception {
        session.setAttribute("username", username);

        User user = users.findOneByName(username);
        if (user == null){
            user = new User();
            user.username = username;
            user.password = PasswordHash.createHash(password);
            users.save(user);
        }
        else if (!PasswordHash.validatePassword(password, user.password)){
            throw new Exception("Wrong password");
        }
        return "redirect:/";
    }
    @RequestMapping("/logout")
    public String logout(HttpServletRequest request) {
        HttpSession session = request.getSession();
        session.invalidate();
        return "redirect:/";
    }

    //DONT GET REKT BY PUSHES AND PULLZZZZZZZZZ
}
