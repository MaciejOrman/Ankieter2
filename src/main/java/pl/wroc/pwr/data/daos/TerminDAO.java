package pl.wroc.pwr.data.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import pl.wroc.pwr.data.models.Termin;

public interface TerminDAO extends JpaRepository<Termin, Long>{

}
