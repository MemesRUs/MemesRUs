package com.MemesRUs.entities;
import javax.persistence.*;

/**
 * Created by cameronoakley on 11/19/15.
 */
@Entity
@Table(name = "memes")
public class Meme {
    @Id
    @GeneratedValue
    @Column(nullable = false)
    int id;

    /*
    @Column(nullable = false)
    public String originalName;

    @Column(nullable = false)
    public String generatedName;

     */
    @Column(nullable = false)
    public String imageUrl;

    @Column(nullable = false)
    public int popularityRating;

    @Column
    public String topText;

    @Column
    public String bottomText;

    @ManyToOne
    public User user;



}
