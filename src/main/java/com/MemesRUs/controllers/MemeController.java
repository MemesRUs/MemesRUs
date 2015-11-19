package com.MemesRUs.controllers;

import com.MemesRUs.entities.Meme;
import com.MemesRUs.entities.User;
import com.MemesRUs.services.MemeRepository;
import com.MemesRUs.services.UserRepository;
import com.MemesRUs.utils.PasswordHash;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;

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

        User user = users.findOneByUsername(username);
        if (user == null) {
            user = new User();
            user.username = username;
            user.password = PasswordHash.createHash(password);
            users.save(user);
        } else if (!PasswordHash.validatePassword(password, user.password)) {
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
    @RequestMapping("/create-meme")
    public String createMem(HttpSession session,
                            String topText,
                            String bottomText,
                            int popularityRating,
                            String imageUrl) throws Exception {
        String username = (String) session.getAttribute("username");
        if (username == null){
            throw new Exception("Not logged in");
        }
        User user = users.findOneByUsername(username);


        return "redirect:/";
    }
}

    /*
     @RequestMapping("/files")
    public Iterable<Meme> getMemes(){
        return memes.findAll();
    }
     */


    /*
     @RequestMapping("/upload")
    public void upload(HttpServletResponse response,
                       MultipartFile file) throws IOException {
        File f = File.createTempFile("file", file.getOriginalFilename(), new File ("public"));
        FileOutputStream fos = new FileOutputStream(f);
        fos.write(file.getBytes());

        Meme memeFile = new Meme();
        memeFile.originalName = file.getOriginalFilename();
        memeFile.
    }

}
     */

