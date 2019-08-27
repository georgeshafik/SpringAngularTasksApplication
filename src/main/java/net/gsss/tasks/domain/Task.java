package net.gsss.tasks.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

/**
 * Created by gs on 2019-08-27
 */
@Entity
@Data
@AllArgsConstructor
public class Task {

    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @JsonFormat(pattern = "MM/dd/yyyy")
    private LocalDate dueDate;
    private Boolean completed;
}
