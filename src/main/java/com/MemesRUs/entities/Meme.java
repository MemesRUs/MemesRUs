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
    public String topText;

    @Column(nullable = false)
    public String bottomText;

    @Column(nullable = false)
    public Integer popularityRating;

    @Column(nullable = false)
    public String imageUrl;







    @ManyToOne
    public User user;



}
