package ee.teamschedule.schedule.repository;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter @Setter
@Table(name = "juhendaja")
public class Mentor {

    @Id
    private Integer id;
    private String name;
    private String password;

    @ManyToOne
    @JoinColumn(name = "admin_id")
    private Admin admin;

    @OneToMany(mappedBy = "juhendaja", cascade = CascadeType.ALL)
    private List<Team> teams;
}
