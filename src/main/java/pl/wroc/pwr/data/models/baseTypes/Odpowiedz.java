package pl.wroc.pwr.data.models.baseTypes;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@Entity
public class Odpowiedz {
	@Id
	private Long id;
	
	protected Odpowiedz(){}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
}