package com.MemesRUs.entities;

import javax.persistence.*;
import java.util.List;

/**
 * Created by cameronoakley on 11/19/15.
 */
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue
    int id;

    @Column(nullable = false)
    public String username;

    @Column(nullable = false)
    public String password;

    @OneToMany(mappedBy = "user")
    public List<Meme> meme;


}
